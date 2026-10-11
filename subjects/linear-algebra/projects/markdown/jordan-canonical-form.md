# Jordan Canonical Form

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** LA-05  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For every complex square matrix $A$, prove $A=PJP^{-1}$ for a block-diagonal Jordan matrix $J$, and prove its Jordan blocks are unique up to permutation.

**Foundations and permitted imports:**

Work over C. Import characteristic-polynomial splitting (from the fundamental theorem of algebra), Cayley–Hamilton χ_A(A)=0, and polynomial Bézout for coprime polynomials. Define K_j=kerN^j for a nilpotent restriction. The primary decomposition and nilpotent-chain basis are constructed below, so they are not hidden imports.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Primary eigenspace decomposition
N2 [v1] Choose chain heads from the kernel filtration
  N1 -- E1: A direct sum of generalized eigenspaces with nilpotent restrictions. --> N2
N3 [v1] Prove the chains form a basis
  N2 -- E2: Chain heads of exact lengths j, with counts w_j. --> N3
N4 [v1] Jordan form and block uniqueness
  N1 -- E1: A direct sum of generalized eigenspaces with nilpotent restrictions. --> N4
  N2 -- E2: Chain heads of exact lengths j, with counts w_j. --> N4
  N3 -- E3: A basis of nilpotent Jordan chains on each generalized eigenspace. --> N4
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | A direct sum of generalized eigenspaces with nilpotent restrictions. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | Chain heads of exact lengths j, with counts w_j. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T1-4 | N1/v1, E1 | A direct sum of generalized eigenspaces with nilpotent restrictions. | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-4 | N2/v1, E2 | Chain heads of exact lengths j, with counts w_j. | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T3-4 | N3/v1, E3 | A basis of nilpotent Jordan chains on each generalized eigenspace. | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N3 |

## 3. Node roles and faculty activities

### N1/v1 — Primary eigenspace decomposition

**Object, role, and local target:** Construct polynomial projection operators using Bézout. The required export is: A direct sum of generalized eigenspaces with nilpotent restrictions.

**Inputs:** χ_A(t)=∏_λ(t−λ)^{m_λ}; Cayley–Hamilton; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-05.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain χ_A(t)=∏_λ(t−λ)^{m_λ}; Cayley–Hamilton; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Construct polynomial projection operators using Bézout. |
| Sense | Ordinary eigenspaces alone need not span V. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** A direct sum of generalized eigenspaces with nilpotent restrictions. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Choose chain heads from the kernel filtration

**Object, role, and local target:** Complement the lower layer plus images of longer chains. The required export is: Chain heads of exact lengths j, with counts w_j.

**Inputs:** Nilpotent N with K_s=V, K₀=0, K_(s+1)=V; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-05.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Nilpotent N with K_s=V, K₀=0, K_(s+1)=V; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Complement the lower layer plus images of longer chains. |
| Sense | An arbitrary basis of kerN cannot serve as chain heads for all lengths. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Chain heads of exact lengths j, with counts w_j. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Prove the chains form a basis

**Object, role, and local target:** Show spanning and count exactly dimV vectors. The required export is: A basis of nilpotent Jordan chains on each generalized eigenspace.

**Inputs:** Complement identities for every K_j; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-05.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Complement identities for every K_j; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Show spanning and count exactly dimV vectors. |
| Sense | Both spanning and exact count are needed; a collection of chains may otherwise be dependent. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** A basis of nilpotent Jordan chains on each generalized eigenspace. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

### N4/v1 — Jordan form and block uniqueness

**Object, role, and local target:** Read block multiplicities from invariant kernel dimensions. The required export is: Existence and uniqueness up to permutation of complex Jordan blocks.

**Inputs:** Chain bases in all V_λ; prior exports E1/v1, E2/v1, E3/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-05.N4`; publish E4 only after the stated local target is established. |
| Memory | Retain Chain bases in all V_λ; prior exports E1/v1, E2/v1, E3/v1; keep their assumptions and versions attached. |
| Intellect | Read block multiplicities from invariant kernel dimensions. |
| Sense | Uniqueness concerns block data, not the chain basis or change-of-basis matrix. |
| Action | Execute the numbered mathematical activities in §4.N4, including its displayed identities and logical implications. |

**Export E4/v1:** Existence and uniqueness up to permutation of complex Jordan blocks. Evidence is the authored argument in §4.N4, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N4 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E4, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E4. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Primary eigenspace decomposition

1. Set p_λ=(t−λ)^{m_λ}, P=∏p_λ and Q_λ=P/p_λ.

2. Since gcd(p_λ,Q_λ)=1 choose b_λ with b_λQ_λ≡1 modp_λ.

3. Put e_λ=b_λQ_λ; it is 0 modulo every other p_μ.

4. Thus∑e_λ≡1 modP and e_λe_μ≡0 modP forλ≠μ.

5. Evaluating atA gives projections onto V_λ=kerp_λ(A): p_λ(A)e_λ(A)=0, and e_λ(A) acts as identity on V_λ and zero on the other V_μ.

6. Therefore V is their direct sum.

7. On V_λ, N=A−λI is nilpotent.

### §4.N2 — Choose chain heads from the kernel filtration

1. For each j=1,…,s choose a subspace W_j complementary to K_(j−1)+N K_(j+1) in K_j.

2. The denominator lies inK_j.

3. Its intersection K_(j−1)∩N K_(j+1) equalsN K_j: if Nz lies inK_(j−1), N^jz=0 so z∈K_j.

4. Writing d_j=dimK_j and d₀=0,d_(s+1)=d_s, and using dimN K_j=d_j−d₁, gives w_j=dimW_j=2d_j−d_(j−1)−d_(j+1).

5. A nonzero chosen basis vector inW_j does not lie inK_(j−1), so its N-chain has exact lengthj.

### §4.N3 — Prove the chains form a basis

1. The identity K_j=K_(j−1)+W_j+N K_(j+1) can be expanded upwards.

2. Terms N K_j lie inK_(j−1), giving K_j⊂K_(j−1)+∑_{ℓ=j}^s N^{ℓ−j}W_ℓ.

3. Descend through j=s,…,1; this shows all ofV is spanned by the chains w,Nw,…,N^{j−1}w for basis headsw∈W_j.

4. Their total number is∑_{j=1}^s j w_j=∑j(2d_j−d_(j−1)−d_(j+1))=d_s by telescoping.

5. A spanning list of exactly dimV vectors is a basis.

6. Order each chain as(N^{j−1}w,…,Nw,w); N then has ones on the superdiagonal and zeros elsewhere in that block.

### §4.N4 — Jordan form and block uniqueness

1. Joining the bases over distinctλ gives J with blocks J_j(λ), so A=PJP⁻¹ for the change-of-basis matrixP.

2. A lengthℓ block contributes min(j,ℓ) to dimkerN^j.

3. Thus d_j−d_(j−1) is the number of blocks of length at leastj, and w_j=(d_j−d_(j−1))−(d_(j+1)−d_j) is the number of length exactlyj.

4. These kernel dimensions are invariant under similarity, as are the eigenvalues.

5. Hence every block multiplicity is determined, proving uniqueness up to block order.

## 5. Worked instance and boundary audit

For a nilpotent operator with kernel dimensions d₁=2,d₂=3,d₃=4 and d₄=4, the increments are2,1,1,0. There are two blocks total, one of length3 and one of length1. Thus J=J₃(0)⊕J₁(0), and no block of length2 occurs.

**Boundary or failed-argument audit:**

Over R a rotation matrix has no real eigenvalue, so a real Jordan matrix with real diagonal entries cannot represent it. Sense keeps the complex-field contract; a real canonical form needs separate2×2 blocks for conjugate eigenvalues.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `LA-05`, version 1, and the proof with every reuse. Intermediate exports E1–E4 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [MIT Algebra II notes: field extensions and Galois theory](https://ocw.mit.edu/courses/res-18-012-algebra-ii-student-notes-spring-2022/pages/student-notes/).

[Branch index](../README.md)
