# Riemann Mapping Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** CA-05  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a nonempty simply connected proper domain $\Omega\subsetneq\mathbb C$ and $z_0\in\Omega$, prove there is a unique biholomorphism $F:\Omega\to\mathbb D$ with $F(z_0)=0$ and $F'(z_0)>0$ real.

**Foundations and permitted imports:**

Use these imported complex-analytic modules: on a simply connected domain every nowhere-zero holomorphic function has a holomorphic logarithm and hence a square root; a locally bounded holomorphic family has a locally uniformly convergent subsequence (Montel); a locally uniform limit of injective holomorphic functions is injective or constant (Hurwitz consequence); the maximum modulus principle; Schwarz’s lemma; Cauchy’s derivative bound; disk automorphisms φ_b(w)=(w−b)/(1−conj(b)w). These supporting results are substantial and are not proved here. The target mapping theorem is not imported.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Construct a bounded injective family
N2 [v1] Attain maximal derivative
  N1 -- E1: The family of injective maps Ω→D with value0 and positive derivative atz₀ is nonempty. --> N2
N3 [v1] Force surjectivity
  N2 -- E2: An injective normalized extremizer F with F′(z₀)=α>0. --> N3
N4 [v1] Normalized uniqueness
  N3 -- E3: F is a biholomorphism Ω→D. --> N4
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The family of injective maps Ω→D with value0 and positive derivative atz₀ is nonempty. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | An injective normalized extremizer F with F′(z₀)=α>0. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T3-4 | N3/v1, E3 | F is a biholomorphism Ω→D. | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N3 |

## 3. Node roles and faculty activities

### N1/v1 — Construct a bounded injective family

**Object, role, and local target:** Take a square root, omit an open disk, then reciprocate. The required export is: The family of injective maps Ω→D with value0 and positive derivative atz₀ is nonempty.

**Inputs:** Proper simply connected Ω and z₀; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-05.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Proper simply connected Ω and z₀; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Take a square root, omit an open disk, then reciprocate. |
| Sense | Properness supplies a; a branch must be global on Ω. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The family of injective maps Ω→D with value0 and positive derivative atz₀ is nonempty. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Attain maximal derivative

**Object, role, and local target:** Take an extremal sequence with a nonconstant limit. The required export is: An injective normalized extremizer F with F′(z₀)=α>0.

**Inputs:** Normalized family; Montel and Cauchy bounds; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-05.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Normalized family; Montel and Cauchy bounds; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Take an extremal sequence with a nonconstant limit. |
| Sense | A constant limit must be ruled out before invoking injective-limit preservation. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** An injective normalized extremizer F with F′(z₀)=α>0. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Force surjectivity

**Object, role, and local target:** Construct a normalized map with a larger derivative. The required export is: F is a biholomorphism Ω→D.

**Inputs:** Extremizer F; hypothetical omitted b∈D; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-05.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Extremizer F; hypothetical omitted b∈D; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Construct a normalized map with a larger derivative. |
| Sense | The derivative improvement must be strict, not merely nondecreasing. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** F is a biholomorphism Ω→D. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

### N4/v1 — Normalized uniqueness

**Object, role, and local target:** Apply Schwarz to the transition map and its inverse. The required export is: Existence and uniqueness of the specified normalized biholomorphism.

**Inputs:** Two biholomorphisms with the same normalization; prior exports E3/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-05.N4`; publish E4 only after the stated local target is established. |
| Memory | Retain Two biholomorphisms with the same normalization; prior exports E3/v1; keep their assumptions and versions attached. |
| Intellect | Apply Schwarz to the transition map and its inverse. |
| Sense | Dropping the positive-derivative condition leaves rotational freedom. |
| Action | Execute the numbered mathematical activities in §4.N4, including its displayed identities and logical implications. |

**Export E4/v1:** Existence and uniqueness of the specified normalized biholomorphism. Evidence is the authored argument in §4.N4, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N4 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E4, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E4. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Construct a bounded injective family

1. Choose a∉Ω and a branch h(z)=√(z−a).

2. It is injective since equality of h implies equality after squaring.

3. Its image is disjoint from its negative: h(z₁)=−h(z₂) would give z₁=z₂ and h(z₁)=0, impossible.

4. Let w₀=h(z₀); the open image contains B(w₀,r) for some r>0, so it omits B(−w₀,r).

5. Thus q(z)=1/(h(z)+w₀) is injective, holomorphic, and bounded by 1/r.

6. Scale it strictly into D, apply a disk automorphism to make the value atz₀ zero, and rotate so its nonzero derivative is positive real.

7. This gives a nonempty family F of normalized injective maps Ω→D.

### §4.N2 — Attain maximal derivative

1. Choose a closed disk aboutz₀ contained inΩ.

2. Cauchy’s estimate bounds every family derivative atz₀ by one common finite constant.

3. Let α be the supremum of the positive derivatives; it is positive by nonemptiness.

4. Pick f_j with f_j′(z₀)→α.

5. Montel provides a locally uniform limit F, with F(z₀)=0 and F′(z₀)=α by Cauchy’s formula.

6. It is nonconstant.

7. Hurwitz makes F injective, and the maximum modulus principle upgrades |F|≤1 to |F|<1.

8. Thus F belongs to the family and attainsα.

### §4.N3 — Force surjectivity

1. Suppose b∈D\F(Ω).

2. Because F(z₀)=0, b≠0.

3. Let r=|b|∈(0,1) and H=φ_b∘F, which never vanishes.

4. Take a holomorphic square root h of H onΩ.

5. Since |H|<1, h maps into D, and it is injective by squaring.

6. Write c=h(z₀); then |c|=√r.

7. The normalized map ψ_c∘h, followed by a rotation, belongs to the family.

8. Its derivative modulus atz₀ is α(1−r²)/(2√r(1−r))=α(1+r)/(2√r)>α because(1−√r)²>0.

9. This contradicts maximality.

10. Hence F is onto D.

11. Its derivative never vanishes by holomorphic injectivity, and the local inverse theorem gives a holomorphic inverse.

### §4.N4 — Normalized uniqueness

1. If F and G are normalized, A=G∘F⁻¹ is an automorphism of D fixing0.

2. Schwarz applied to A and A⁻¹ gives |A′(0)|=1 and the equality case A(w)=e^{iθ}w.

3. But A′(0)=G′(z₀)/F′(z₀) is positive real; hence it equals1 and A is the identity.

4. Thus G=F.

## 5. Worked instance and boundary audit

For the upper half-plane Ω and z₀=i, F(z)=i(z−i)/(z+i) maps Ω onto D. The Cayley transform has unit-circle boundary values and maps i to 0; multiplication by i rotates the disk. Direct differentiation gives F′(i)=1/2>0, matching the normalization.

**Boundary or failed-argument audit:**

A multiply connected annulus cannot be biholomorphic to D because biholomorphisms preserve fundamental groups. For Ω=C, a map into D would be bounded entire and constant by Liouville. Sense checks these domain exclusions before attempting the square-root/extremal proof.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `CA-05`, version 1, and the proof with every reuse. Intermediate exports E1–E4 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [Harvard complex analysis: Cauchy formula, argument principle, and Riemann mapping lectures](https://people.math.harvard.edu/~siu/math113/).

- [Harvard Riemann Mapping Theorem lecture](https://people.math.harvard.edu/~siu/math113/15_riemann_mapping_theorem.pdf).

[Branch index](../README.md)
