# First Isomorphism Theorem for Groups

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** MA-02  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a group homomorphism $\varphi:G\to K$, prove $\ker\varphi$ is normal and $G/\ker\varphi\cong\operatorname{im}\varphi$.

**Foundations and permitted imports:**

Groups need not be finite. A homomorphism satisfiesφ(gh)=φ(g)φ(h). For a normal subgroupN the quotient has multiplication(gN)(hN)=ghN. The proof audits normality and representative independence before using that construction.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Normal kernel and image subgroup
N2 [v1] Induced map is well-defined
  N1 -- E1: A normal kernelN and subgroupimφ. --> N2
N3 [v1] Injectivity and isomorphism
  N2 -- E2: A well-defined surjective homomorphism Φ:G/N→imφ. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | A normal kernelN and subgroupimφ. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | A well-defined surjective homomorphism Φ:G/N→imφ. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Normal kernel and image subgroup

**Object, role, and local target:** Use inverse and conjugation identities. The required export is: A normal kernelN and subgroupimφ.

**Inputs:** φ:G→K a homomorphism; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-02.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain φ:G→K a homomorphism; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Use inverse and conjugation identities. |
| Sense | The theorem’s codomain conclusion is imφ, not all ofK. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** A normal kernelN and subgroupimφ. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Induced map is well-defined

**Object, role, and local target:** Check representative equality before algebra. The required export is: A well-defined surjective homomorphism Φ:G/N→imφ.

**Inputs:** NormalN; proposedΦ(gN)=φ(g); prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-02.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain NormalN; proposedΦ(gN)=φ(g); prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Check representative equality before algebra. |
| Sense | A formula on cosets is not automatically well-defined. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** A well-defined surjective homomorphism Φ:G/N→imφ. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Injectivity and isomorphism

**Object, role, and local target:** Use equality of images to recover equality of cosets. The required export is: The first isomorphism theorem for arbitrary groups.

**Inputs:** InducedΦ; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-02.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain InducedΦ; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Use equality of images to recover equality of cosets. |
| Sense | Equal finite sizes cannot substitute for injectivity in infinite groups. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** The first isomorphism theorem for arbitrary groups. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Normal kernel and image subgroup

1. The kernelN={g:φ(g)=1} contains1 and is closed under products and inverses.

2. Forn∈N andg∈G, φ(gng⁻¹)=φ(g)1φ(g)⁻¹=1, soN is normal.

3. The image contains1 and is closed under products and inverses, hence is a subgroup ofK.

4. Quotient multiplication is valid becauseN is normal.

### §4.N2 — Induced map is well-defined

1. If gN=hN thenh⁻¹g∈N, soφ(h)⁻¹φ(g)=1 and φ(g)=φ(h).

2. ThusΦ is independent of representatives.

3. It preserves multiplication sinceΦ(ghN)=φ(gh)=φ(g)φ(h)=Φ(gN)Φ(hN).

4. It is ontoimφ by the definition of image.

### §4.N3 — Injectivity and isomorphism

1. IfΦ(gN)=Φ(hN), thenφ(h⁻¹g)=1, so h⁻¹g∈N andgN=hN.

2. HenceΦ is injective as well as surjective and a homomorphism.

3. Its inverse preserves products because preimages are unique, so it is a group isomorphism.

4. This proves G/kerφ≅imφ without any cardinality argument.

## 5. Worked instance and boundary audit

Forφ:Z→Z/6Z sending an integer to its residue, kerφ=6Z andimφ=Z/6Z. The induced map takes the additive cosetn+6Z to[n], giving the explicit isomorphism. Forφ(n)=2n intoZ, the image is 2Z, not the whole codomain.

**Boundary or failed-argument audit:**

For the inclusion2Z↪Z the kernel is 0; the quotient is 2Z and the theorem identifies it with its image2Z. Sense rejects replacing the image byZ through the induced inclusion, since that map is not onto.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `MA-02`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
