# Arzelà–Ascoli Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** RA-05  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For compact metric $K$, prove that $\mathcal F\subset C(K,\mathbb R)$ is relatively compact in the supremum norm if and only if it is uniformly bounded and equicontinuous.

**Foundations and permitted imports:**

For compact metric K, finite ε-nets exist. Bolzano–Weierstrass applies to bounded real sequences. C(K) with supremum norm is complete; a uniform limit of continuous functions is continuous. In metric spaces compactness equals sequential compactness, and complete totally bounded spaces are compact. These elementary metric lemmas are permitted imports.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Diagonal pointwise subsequence
N2 [v1] Uniform Cauchy bridge
  N1 -- E1: A subsequence converges at all points of a countable dense set. --> N2
N3 [v1] Relative compactness
  N2 -- E2: Every sequence in F has a uniformly convergent subsequence in C(K). --> N3
N4 [v1] Necessity from finite norm nets
  N3 -- E3: Uniform boundedness and equicontinuity imply relative compactness. --> N4
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T3-4 | N3/v1, E3 | Uniform boundedness and equicontinuity imply relative compactness. | N4.1 and final equivalence synthesis | Same compact metric K and family F | Proof §4.N3 |
| T1-2 | N1/v1, E1 | A subsequence converges at all points of a countable dense set. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | Every sequence in F has a uniformly convergent subsequence in C(K). | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Diagonal pointwise subsequence

**Object, role, and local target:** Exploit a countable dense set supplied by finite nets. The required export is: A subsequence converges at all points of a countable dense set.

**Inputs:** Uniform boundedness and equicontinuity of F; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-05.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Uniform boundedness and equicontinuity of F; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Exploit a countable dense set supplied by finite nets. |
| Sense | A dense set alone does not imply uniform convergence. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** A subsequence converges at all points of a countable dense set. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Uniform Cauchy bridge

**Object, role, and local target:** Control the entire space by finitely many nearby sampled points. The required export is: Every sequence in F has a uniformly convergent subsequence in C(K).

**Inputs:** Diagonal convergence; uniform equicontinuity; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-05.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Diagonal convergence; uniform equicontinuity; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Control the entire space by finitely many nearby sampled points. |
| Sense | The δ is common to the family, not chosen separately for each function. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Every sequence in F has a uniformly convergent subsequence in C(K). Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Relative compactness

**Object, role, and local target:** Extend the property to the closure. The required export is: Uniform boundedness and equicontinuity imply relative compactness.

**Inputs:** Subsequence property; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-05.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Subsequence property; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Extend the property to the closure. |
| Sense | A limit need not belong to F itself, only its closure. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Uniform boundedness and equicontinuity imply relative compactness. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

### N4/v1 — Necessity from finite norm nets

**Object, role, and local target:** Turn compactness into uniform bounds and a shared continuity modulus. The required export is: Relative compactness is equivalent to both stated family conditions.

**Inputs:** Compact closure(F); prior export E3/v1 for the final equivalence synthesis

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `RA-05.N4`; publish E4 only after the stated local target is established. |
| Memory | Retain Compact closure(F); prior export E3/v1 for the final equivalence synthesis; keep their assumptions and versions attached. |
| Intellect | Turn compactness into uniform bounds and a shared continuity modulus. |
| Sense | Pointwise boundedness is not the hypothesis used in the diagonal step unless compact equicontinuity is separately used to upgrade it. |
| Action | Execute the numbered mathematical activities in §4.N4, including its displayed identities and logical implications. |

**Export E4/v1:** Relative compactness is equivalent to both stated family conditions. Evidence is the authored argument in §4.N4, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N4 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E4, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E4. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Diagonal pointwise subsequence

1. Assume K nonempty; if it is empty the function space has one element.

2. Unite finite1/j-nets to obtain a countable dense set{z₁,z₂,…}.

3. Given any sequence in F, repeatedly extract subsequences converging atz_j using boundedness and Bolzano–Weierstrass.

4. The diagonal subsequence g_j converges at every fixed z_i.

### §4.N2 — Uniform Cauchy bridge

1. Given ε>0 choose δ so d(x,y)<δ implies |h(x)−h(y)|<ε/3 for every h∈F.

2. Choose a finiteδ-net whose centers lie in the dense set.

3. For large j,k all finitely many center differences |g_j(z_i)−g_k(z_i)| are belowε/3.

4. For arbitrary x choose a center withinδ; the triangle inequality gives |g_j(x)−g_k(x)|<ε.

5. Completeness of C(K) supplies a uniform continuous limit.

6. Every sequence in F has such a subsequence.

### §4.N3 — Relative compactness

1. For a sequence h_j in the closure of F choose g_j∈F with ‖h_j−g_j‖∞<1/j.

2. A uniformly convergent subsequence of g_j forces the corresponding h_j to converge to the same limit, which lies in the closed set closure(F).

3. Its closure is therefore sequentially compact and hence compact by the metric lemma.

4. This proves sufficiency.

### §4.N4 — Necessity from finite norm nets

1. Cover closure(F) by finitely many norm balls of radius1 centered at h_i.

2. Then ‖f‖∞≤1+max_i‖h_i‖∞.

3. For ε>0 choose a finite norm net of radiusε/3 with continuous centers h_i.

4. Each center is uniformly continuous on K; choose one δ valid for all finitely many.

5. For d(x,y)<δ and f withinε/3 of h_i, |f(x)−f(y)|≤2‖f−h_i‖∞+|h_i(x)−h_i(y)|<ε.

6. Thus F is equicontinuous; both directions close.

## 5. Worked instance and boundary audit

The functions on[0,1] with |f|≤1 and Lipschitz constant≤1 are equicontinuous, so every sequence has a uniform convergent subsequence. The proof takes common δ=ε/3 and finitely many rational grid centers; the limit keeps the same bounds.

**Boundary or failed-argument audit:**

The family x↦xⁿ on[0,1] is uniformly bounded but not equicontinuous at 1. Its only possible pointwise limit has a jump at 1, so no subsequence converges uniformly. Sense rejects treating boundedness as sufficient and routes the failure to the common-modulus node.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `RA-05`, version 1, and the proof with every reuse. Intermediate exports E1–E4 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
